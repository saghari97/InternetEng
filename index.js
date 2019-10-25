const fs = require('fs');
const express = require('express');
var areas = fs.readFilesSync('./sample-data.json');
var InternetEng = JSON.parse(areas.toString());

