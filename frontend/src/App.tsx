import { useEffect, useState } from 'react'
import './App.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Loader2Icon } from 'lucide-react';

function App() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTotalSpent = async () => {
      setLoading(true)
      
      fetch("/api/expenses/total-expense")
      .then(async (resp) => { 
        console.log(resp)
        const body = await resp.json();
        console.log(body)
        setTotal(body.total)
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false);
      })
    
    } 

      getTotalSpent()

  }, [])

  return (
    <div className='p-4'>
      <Card className='w-64'>
        <CardHeader>
          <CardTitle>title</CardTitle>
          <CardDescription>desc</CardDescription>
          <CardContent className=''>
            {loading ? <Loader2Icon className="animate-spin"/> : <p>{total}</p>}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default App
