import { useState } from "react"
import axios from "axios"
import e from "cors"

export const Converter = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    amount: ''
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const currencyCodes = ['GTQ', 'EUR', 'USD', 'MXN', 'CRC']

  const url = 'http://localhost:2657/convert'

  const handleChange = (e) => {
    const { name, value } = e.target
    //console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const { data } = await axios.post(url, formData)
      console.log(data);
      setResult(data)
      setError('')
    } catch (error) {
      setResult('')
      console.error(error);
      setError('Error', error?.response ? error?.response?.data.message : error?.message )
    }
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <select
            name="from"
            value={formData.from}
            onChange={handleChange}
          >
            <option value="">Select of currency</option>
            {
              currencyCodes.map(code => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))
            }
          </select>

          <select
            name="to"
            value= {formData.to}
            onChange={handleChange}
          >
            <option value="">Select from currency</option>
            {
              currencyCodes.map(code => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))
            }

          </select>
            <input 
            type="number" 
            name="amount"
            value={ formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            />
            <button type="submit">
              Convert
            </button>
        </form>
        {
          result && (
            <div>
              <p>Conversion Rate: {result.conversionRate}</p>
              <h2>Conversion Amount: {result.convertedAmount}</h2>
            </div>
          )
        }
        {
          error && <p> Error: {error.Error}</p>
        }
      </section>
    </div>
  )
}