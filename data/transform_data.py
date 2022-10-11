from openpyxl import load_workbook
import os
import json

# Load the workbook
import_path = os.path.dirname(os.path.abspath(__file__))
wb = load_workbook(import_path + '/pdfs/cleaned_data.xlsx')
sheet = wb.active

rows = sheet.rows
headers = [cell.value for cell in next(rows)]

# store data as dictionary to be exported as json later on
data = {}
# relative file path to store json file
export_path = os.path.dirname(os.path.abspath(__file__)) + '/output.json'


for row in rows:
    
    values = {headers[i]: cell.value for i, cell in enumerate(row)}
    # We can access Date, Content, Sender, Participants, Reactions, Type
    date = values['Date']
    content = values['Content']
    sender = values['Sender']
    participants = values['Participants']
    reactions = values['Reactions']
    type = values['Type']

    if "Participants" in values:
        participants_array = participants.split(", ")
        # filter out participants that are called 'self'
        participants_array = list(filter(lambda x: x != 'Self', participants_array))
        if len(participants_array) == 0:
            continue
        # turn participants_array into string
        participants_string = ", ".join(participants_array)
        if participants_string not in data:
            data[participants_string] = {}
        
        data[participants_string]["group"] = len(participants_array) > 1
        data[participants_string]["participants"] = participants_array
        data[participants_string]["last_message"] = content
        data[participants_string]["last_message_date"] = date

        # if there are no messages yet, initialize the messages array
        if "messages" not in data[participants_string]:
            data[participants_string]["messages"] = []
        # add the message to the messages array if message type is not a reaction
        if type != "Reaction":
            data[participants_string]["messages"].append({
                "date": date,
                "content": content,
                "sender": sender,
                "type": type,
                "reactions": reactions
            })

def writeToJson():
    with open(export_path, 'w') as outfile:
        json.dump(data, outfile)
writeToJson()