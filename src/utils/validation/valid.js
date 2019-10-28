export const required = value => {
    if(value) return undefined;
    return 'Field is required'
}
// maxLength15, minLength2

export const maxLengthCreator =  (maxLength) => (value) => {
    if(value && value.length > maxLength) return 'Max length is '+ maxLength +' symbols';
    return undefined;
}

