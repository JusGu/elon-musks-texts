import wikipedia
import json
import os
# this program will get wikipedia info from the json file
target_json = open(os.path.dirname(os.path.abspath(__file__)) + '/participants.json')
target_data = json.load(target_json)

output_dir = os.path.dirname(os.path.abspath(__file__)) + '/wikipedia.json'
output_data = {}
for i in target_data["participants"]:
    search_string = i
    try:
        page = wikipedia.page(search_string)
        output_data[i] = {
            "title": page.title,
            "url": page.url,
            "summary": page.summary
        }
    except wikipedia.exceptions.DisambiguationError as e:
        print(e.options)
    except wikipedia.exceptions.PageError as e:
        print(e)
    except wikipedia.exceptions.WikipediaException as e:
        print(e)
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise
def writeToJson(data_to_write, path):
    with open(path, 'w') as outfile:
        json.dump(data_to_write, outfile)
# output to json
writeToJson(output_data, output_dir)
