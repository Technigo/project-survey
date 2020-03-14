const Example = () => {
  const [section, setSection] = useState('firstQuestion')

  return (
    <div>
      {section === 'firstQuestion' && <Form />}

      {section === 'secondQuestion' && <EndPage name={values[2]} age={values[1]} city={values[0]} />}
    </div>
  )
}