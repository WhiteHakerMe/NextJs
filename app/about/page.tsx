// import Image from 'next/image';
import { TodoDataType } from '~/types';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const About = async () => {
  const data: TodoDataType[] = await getData();
  console.log(data);

  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <h2 className='font-bold'> {el.name}</h2>
          <p >{el.Description}</p>
          {/* <Image src={el.image} /> */}
        </div>
      ))}
    </div>
  );
};

export default About;
