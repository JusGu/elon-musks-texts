# elon-musks-texts
GUI to view Elon Musk's Texts

![Screenshot](https://i.imgur.com/j4rgONL.png)
## Quick Start
Check it out [here!](https://jusgu.github.io/elon-musks-texts/)

## How I made it
1. Use OCR to scan Court of Chanery PDF Documents (`/data/pdfs/full_rotated.pdf`) into an Excel File (`/data/pdfs/full_rotated_part_one.xlsx` and `/data/pdfs/full_rotated_part_two.xlsx`)
2. Sort through data and manually label reactions on Excel (`/data/pdfs/cleaned_data.xlsx`)
3. Turn the Excel File into a JSON file with Python (`/data/output.json`)
3. Build React App with Mantine Components Library
4. Get individual profile pictures by searching Bing with a Python Script `/data/get_pfps.py`
## Tools Used
- React (Mantine)
- Python 


