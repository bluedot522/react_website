import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Student from './Student.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
    const fruits = [{id: 1, name: 'Apple', calories: 95}, {id: 2, name: 'Orange', calories: 45}, {id: 3, name: 'Banana', calories: 105}, {id: 4, name: 'Coconut', calories: 159}, {id: 5, name: 'Pineapple', calories: 37}];

    const vegetables = [{id: 6, name: 'Potatoes', calories: 110}, {id: 7, name: 'Celery', calories: 15}, {id: 8, name: 'Carrots', calories: 25}, {id: 9, name: 'Corn', calories: 63}, {id: 10, name: 'Broccoli', calories: 50}];

  return(  
    <>
    
      <Header />
      <UserGreeting isLoggedIn={true} userName="Kay"/>
      <Card />
      {fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" /> }
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" age={0} />
      <Food />
      <Button />
      <Footer />
    </>
  );
}

export default App
