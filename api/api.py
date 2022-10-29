import json
import os
import time
from urllib import response
from flask import Flask, jsonify,request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
@app.route('/', methods=['GET'])
@cross_origin()
def index():
    print(os.scandir('/'))
    
    path = request.args.get('path')
    # path = './'
    print(path)
    if(path==None):
        path='./'
    else:
        path='./'+path
        
    data= []
 
    for _ in os.listdir(path):
        ti_c = os.path.getctime(os.path.join(path, _))
        ti_m = os.path.getmtime(os.path.join(path, _))
         
        # Converting the time in seconds to a timestamp
        c_ti = time.ctime(ti_c)
        m_ti = time.ctime(ti_m)
       
        storage = {
        'name':_,
        'path':path,
        'is_file':os.path.isfile(os.path.join(path, _)),
 'size':os.path.getsize(os.path.join(path, _)xw),
        'created_time':c_ti,
        'modified_time':m_ti
        }
        data.append(storage)
    
    
    # print(data)
    response =jsonify({'path': path.strip('.')
                },{'data':data})
                

 
    return response


app.run(port=9000,debug=True)