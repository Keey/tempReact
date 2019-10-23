let initState = {
  friends: [
    {
      name: 'Bob',
      photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
    },
    {
      name: 'Sveta',
      photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
    },
    {
      name: 'Vova',
      photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
    }
  ]
};

const asideReduce = (state = initState, action) => {
  return state;
}

export default asideReduce;