interface IcardProps {
  title: string;
  children: React.ReactNode;
}

const Card = (props: IcardProps) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <span>
        title: {props.title}
      </span>

      <div>
        {props.children}
      </div>

      <div>
        footer
      </div>
    </div>
  )
}

export function App() {
  
  return (
    <div>

      <p>Card: </p>

      <Card title='teste'>
        Abacate
      </Card>

    </div>
  )
}
