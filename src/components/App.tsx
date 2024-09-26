
import './App.css'
import Calculator from './calculator/Calculator'
import EmailForm from './EmailForm'
import FormComponent from './form-validation/FormComponent'
import GoalList from './GoalList'
import ProductList from './ProductList'

function App() {

  return (
    <div>
      <h1>Hi, this is Diana!</h1>
      <GoalList />
      <Calculator />
      <EmailForm />
      <ProductList />
      <FormComponent />
    </div>
  )
}

export default App
