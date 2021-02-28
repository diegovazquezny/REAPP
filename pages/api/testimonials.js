require('dotenv').config();
const parser = require('fast-xml-parser');
const he = require('he');
const options = {
  attributeNamePrefix : "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName : "#text",
  ignoreAttributes : true,
  ignoreNameSpace : false,
  allowBooleanAttributes : false,
  parseNodeValue : true,
  parseAttributeValue : false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
  tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"]
};

export default async (req, res) => {
  let data;
  const API_URL = 'http://www.zillow.com/webservice/ProReviews.htm';
  const { ID } = process.env;
  const { SCREEN_NAME } = process.env;
  try {
    const response =  await fetch(`${API_URL}?zws-id=${ID}&screenname=${SCREEN_NAME}`);
    const xml = await response.text();
    const xmlObj = await parser.getTraversalObj(xml,options);
    data = await parser.convertToJson(xmlObj,options);
  } catch (error) {
    console.log(err);
    return res.status(500).json({message: err});
  }
  return res.status(200).json({ data });
}
