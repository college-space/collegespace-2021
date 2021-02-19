export const getImageURL = (url, width, height, quality, improve) => {
  // Prepare the options string
  let options = '';
  if (width !== -1) options += `w_${width}`;
  if (height !== -1) {
    if (options.length > 0) options += ',';
    options += `h_${height}`;
  }
  if (quality !== -1) {
    if (options.length > 0) options += ',';
    options += `q_${quality}`;
  }
  if (improve !== -1) {
    if (options.length > 0) options += ',';
    options += `e_improve`;
  }
  // Now add options string after 'upload' in the URL
  // upload/{options}/v1613712054
  const urlParts = url.split('upload');
  const newURL = urlParts[0] + 'upload/' + options + urlParts[1];
  return newURL;
};
