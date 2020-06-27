import React from 'react'
import { Container } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Nav  from '../../components/Nav'

const Home = () => {
    // const [ mode, setMode ] = useState(false)

    return (
        <div>
            <Nav />
            <Container max-width="md" style={{border: "1px solid black"}}>
                <div className="container-account">
                    <AccountCircle fontSize="large"/>
                    <p>Posted by: Reynold Urena</p>
                </div>
                <h1>Title 2Title Title 4Title Title 2Title Title 4Title Title 2Title Title</h1>
                <p>Posted Time and Date</p>
            </Container>
            {/* <Modal 
                open={mode}
                onClose={() => setMode(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <p>Hello</p>
            </Modal> */}
        </div>
    )
}

export default Home
