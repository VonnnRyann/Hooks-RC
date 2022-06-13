import React from 'react'
import useFetch from '../hooks/useFetch'

const Text = () => {
    const URL = 'https://fakerapi.it/api/v1/texts';

    const {result,loading,error} = useFetch(URL)

        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
    
        const textList = result.data.map((text, i ) => (
            <aside key={i}>
              <aside className='first'>
                <label>Title</label>
                <p>{text.title}</p>
              </aside>
              <aside className='second'>
                <label>Author</label>
                <p>{text.author}</p>
              </aside>
            </aside>
          ));

  return (
    <section className='content'>Texts {textList}</section>
  )
}
export default Text