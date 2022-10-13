from asyncore import write
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
# store all participants in a set
participants_data = set()
# relative file path to store json file
export_path_data = os.path.dirname(os.path.abspath(__file__)) + '/output.json'
export_path_participants = os.path.dirname(os.path.abspath(__file__)) + '/participants.json'


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
            participants_array = ['Unknown']
        # add participants to set
        for participant in participants_array:
            participants_data.add(participant)
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

def writeToJson(data_to_write, path):
    with open(path, 'w') as outfile:
        json.dump(data_to_write, outfile)
writeToJson(data, export_path_data)

def finetine_participants_data(participants_data, names_to_replace, replacement_names):
    for i in range(len(names_to_replace)):
        if names_to_replace[i] in participants_data:
            participants_data.remove(names_to_replace[i])
            participants_data.add(replacement_names[i])
    return participants_data

# replace Satya with Satya Nadella
# replace Sam BF with Sam Bankman-Fried
# replace Parag with Parag Agrawal
# replace BL Lee with Bill Gurley
# replace Mathias D\u00f6pfner with Mathias Dopfner
# replace Kyle with Unknown
# replace TJ with Unknown
# replace James Musk with Unknown
participants_data = finetine_participants_data(participants_data, ["Satya", "Sam BF", "Parag", "BL Lee", "Mathias D\u00f6pfner", "Kyle", "TJ", "James Musk"], ["Satya Nadella", "Sam Bankman-Fried", "Parag Agrawal", "Bill Gurley", "Mathias Dopfner", "Unknown", "Unknown", "Unknown"])

writeToJson({"participants": list(participants_data)}, export_path_participants)
print("Done")

