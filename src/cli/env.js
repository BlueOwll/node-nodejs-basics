// env.js - implement function that parses environment variables with prefix RSS_ and prints them
//  to the console in the format RSS_name1=value1; RSS_name2=value2
const parseEnv = () => {
    process.env.RSS_name1 = 'ahoy1';
    process.env.RSS_name2 = 'ahoy2';
    process.env.RS_name3 = 'ahoy2';
  const pref = 'RSS_';
	Object.keys(process.env).filter((item)=> item.includes(pref)).map((item)=> {console.log(`${item}=${process.env[item]}`)})
}
parseEnv();
