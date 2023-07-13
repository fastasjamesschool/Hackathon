#!/usr/bin/env bash
python ProjectTaskUserRandomizer.py

mongoimport --db CRUDLLC --collection tasks --file tasks.json --jsonArray
mongoimport --db CRUDLLC --collection users --file users.json --jsonArray
mongoimport --db CRUDLLC --collection projects --file projects.json --jsonArray