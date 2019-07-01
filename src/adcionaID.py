# -*- coding: utf-8 -*-
"""
Created on Sun Jun 30 11:03:06 2019

@author: jj_jc
"""

import json

with open('filmes.json', 'r+') as f:
    filmes = json.load(f)
    for i in range(len(filmes)):
        filmes[i]['id'] = i
    
    json.dump(filmes, f, indent=2)