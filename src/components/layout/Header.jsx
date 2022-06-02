import Container from './Container'

const Header = () => {
  return (
    <header className="py-8 bg-primary">
      <Container>
        <h1 className="text-xl font-bold tracking-tight text-light">
          Country API
        </h1>
      </Container>
    </header>
  )
}

export default Header
