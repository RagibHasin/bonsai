/**
 * bounding box
 */

var paths = [
  'M352,5779.724c499,2-3-89,496-84',
  'M478,2877.472c247,3-255-88,244-83',
  'M478,2392.817c247,3-246,14,244-83',
  'M478,3361.031c247-69-246,14,244-83',
  'M500.5,1403.542c273-45-220,38,199-37',
  'M500.5,2587.469c215,96-220,38,199-37',
  'M406,1823.559c404,146-31,88,388,13',
  'M406,2064.553c86,150-31,88,388,13',
  'M406,4966.489c261,149-31,88,388,13',
  'M406,4484.496c382,141-31,88,388,13',
  'M394.5,6471.436c405,75-8,22,411-53',
  'M394.5,5279.895c449-4-8,22,411-53',
  'M394.5,6247.762c449-4,0,0,411-53',
  'M489.5,3565.342c449-4,0,0,221-8',
  'M479.072,3809.049c529-26,0,0,167-6',
  'M516.5,1644.744c352-80,0,0,167-6',
  'M798.002,4082.546c-529,7-523-141.999-12-38.999',
  'M801.469,6774.896c-550.999-16-522.999-142-1-140',
  'M799.765,4354.818c-542,32-523-142-1-140',
  'M770.439,7017.016c-380.001-148-523.001-142-1-140',
  'M769.988,274.009C390.988,266.009,247.988,272.009,769.988,274.009',
  'M794.813,1141.56C277.813,1150.56,272.813,1139.56,794.813,1141.56',
  'M785.217,901.998C320.216,900.998,263.217,899.998,785.217,901.998',
  'M347.5,462.172c505-17-17-18,505-16',
  'M339.5,663.235c521,0-1-1,521,1',
  'M377.5,5495.454c445,0-77-1,445,1',
  'M377.5,5978.951c372,1-77-1,445,1',
  'M564.756,3078.079c372,1-77-1-77-1',
  'M602.874,4750.803c196.999,91-77-1-77-1',
  'M731.169,7500.317c-551-16-74.463,21-1-140',
  'M731.169,7209.412c-551-4.777-74.463,6.271-1-41.811',
  'M1075.169,7682.533c-1996.043-2.379-269.747,3.121-3.622-20.811',
  'M612.657,8228.399c-57.988-464.354,2.249,314.834-1-140',
  'M748.791,9246.203c-48.561-445.45,0,0,0-246.418',
  'M407.051,9488.014c8.771-403.029,0,0,0-246.416',
  'M492,7954.201c258.471-128.029-126-68.002,216-56',
  'M529.006,8937.162c232.271-130.145,105.271-167.076,123.23-0.48',
  'M532.461,8453.83c213.563-131.8,105.271-167.076,123.232-0.479',
  'M538.385,8695.068c169.485-128.53,105.27-167.075,123.23-0.479',
  'M177.365,9657.754 C2314.484,9433.758-164.635,9645.75,177.365,9657.754',
  'M177.365,9863.064 C2314.484,9798.949-164.635,9859.629,177.365,9863.064',
  'M177.365,10098.412 C2314.482,10062.607-164.635,10096.492,177.365,10098.412',
  'M121.108,10352.402c2137.118-35.807,82,41-10.136-40.705',
  'M163.396,10885.141 C453.589,10902.539,162.471,10562.539,163.396,10885.141',
  'M228.071,10627.99 C1915.305,10622.137,202.129,10387.359,228.071,10627.99',
  'M152.222,10991.809 C1084.453,10959.602,1582.453,10868.578,152.222,10991.809',
  'M481.2,243.9 C 481.2,243.9,663.7,250.2,329,181.6 C329,181.6,198.7,118.5,198.7,118.5 C198.7,118.5,181,164.6,181,164.6 C181,164.6,185.3,162.5,185.3,162.5 C30.900000000000002,228.29999999999998,49.36666666666666,211.66666666666666,240.7,112.6 C240.7,112.6,555.8,68.5,519,103',
  'M185.3, 162.5 C 30.900000000000002,228.29999999999998,49.36666666666666,211.66666666666666,240.7,112.6'
];

for (var path, bounds, i = paths.length - 1; i >= 0; i--) {

  path = new Path(paths[i]).attr({
    fillColor: "#FFAAAA",
    strokeColor: "black",
    strokeWidth: 1
  }).addTo(stage);

  bounds = path.getBoundingBox();

  new Rect(bounds.left, bounds.top, bounds.width, bounds.height).attr({
    fillColor: "transparent",
    strokeColor: "red",
    strokeWidth: 1,
    x: bounds.left,
    y: bounds.top,
    width: bounds.width,
    height: bounds.height
  }).addTo(stage);

}
