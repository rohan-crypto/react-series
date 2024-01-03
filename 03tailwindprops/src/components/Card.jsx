// we can use props like this
// const Card = (props) => {

// console.log(props);
// console.log(props.channel);


// we can also destructure props 
//we can give default value to props like this in btnText in case someone forgets to pass the prop
//then default value will be used
const Card = ({channel, btnText="default value"}) => {

    console.log(channel);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Jack and {channel}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit a consectetur ad eli. Except, debit?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile or {btnText} →
    </button>
  </div>
</div>
  )
}

export default Card
