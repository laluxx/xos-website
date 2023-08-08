#!/usr/bin/env python3


from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/getcolors', methods=['GET'])
def get_colors():
    colors_file_path = os.path.expanduser('~/.cache/wal/colors')
    with open(colors_file_path, 'r') as f:
        colors = [line.strip() for line in f.readlines()]
    return jsonify(colors)

if __name__ == '__main__':
    app.run(port=5000)




# V1
# from flask import Flask, jsonify
# import os
#
# app = Flask(__name__)
#
# @app.route('/getcolors')
# def get_colors():
#     path = os.path.expanduser('~/.cache/wal/colors')
#     try:
#         with open(path, 'r') as f:
#             colors = f.readlines()
#         return jsonify(colors)
#     except FileNotFoundError:
#         return jsonify({"error": "File not found"}), 404
#
# if __name__ == '__main__':
#     app.run(port=5000)
