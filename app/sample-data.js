export default {
  'rstar': {
    'name': 'rstar',
    'displayName': 'R<sub>*</sub>',
    'valueType': 'quantity',
    'description': 'The average rate of star formation in our galaxy',
    'backgroundImage': 'images/AAD_icons-01.svg',
    'estimatedMin': 1,
    'estimatedMax': 20,
    'defaultValue': 10
  } ,
  'fp': {
    'name': 'fp',
    'displayName': 'f<sub>p</sub>',
    'valueType': 'percentage',
    'description': 'The fraction of stars that have planets',
    'backgroundImage': 'images/AAD_icons-02.svg',
    'estimatedMin': 0.4,
    'estimatedMax': 1.0,
    'defaultValue': 0.7
  } ,
  'ne': {
    'name': 'ne',
    'displayName': 'n<sub>e</sub>',
    'valueType': 'quantity',
    'description': 'The average number of planets that can potentially support life per star that has planets',
    'backgroundImage': 'images/AAD_icons-03.svg',
    'estimatedMin': 0,
    'estimatedMax': 4,
    'defaultValue': 1
  } ,
  'fl': {
    'name': 'fl',
    'displayName': 'f<sub>l</sub>',
    'valueType': 'percentage',
    'description': 'The fraction of planets that could support life that actually develop life at some point',
    'backgroundImage': 'images/AAD_icons-04.svg',
    'estimatedMin': 0.0,
    'estimatedMax': 1.0,
    'defaultValue': 0.5
  } ,
  'fi': {
    'name': 'fi',
    'displayName': 'f<sub>i</sub>',
    'valueType': 'percentage',
    'description': 'The fraction of planets with life that actually go on to develop intelligent life (civilizations)',
    'backgroundImage': 'images/AAD_icons-05.svg',
    'estimatedMin': 0.0,
    'estimatedMax': 1.0,
    'defaultValue': 0.5
  } ,
  'fc': {
    'name': 'fc',
    'displayName': 'f<sub>c</sub>',
    'valueType': 'percentage',
    'description': 'The fraction of civilizations that develop a technology that releases detectable signs of their existence into space',
    'backgroundImage': 'images/AAD_icons-06.svg',
    'estimatedMin': 0.05,
    'estimatedMax': 0.50,
    'defaultValue': 0.30
  } ,
  'L': {
    'name': 'L',
    'displayName': 'L',
    'valueType': 'log',
    'description': 'The length of time for which such civilizations release detectable signals into space',
    'backgroundImage': 'images/AAD_icons-07.svg',
    'estimatedMin': 0,
    'estimatedMax': 5,
    'defaultValue': 2.60
  } ,
}
