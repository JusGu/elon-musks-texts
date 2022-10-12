from bing_image_downloader import downloader
import os
import json

# this program will download all the pfps from the json file
target_json = open(os.path.dirname(os.path.abspath(__file__)) + '/participants.json')
target_data = json.load(target_json)

output_dir = os.path.dirname(os.path.abspath(__file__)) + '/pfps'
for i in target_data["participants"]:
    search_string = i + " twitter profile picture"
    downloader.download(search_string, limit=1,  output_dir=output_dir, adult_filter_off=True, force_replace=False, timeout=60)
