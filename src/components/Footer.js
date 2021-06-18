import React from 'react'

const Footer = () => {
    
    return (
        <footer className="bg-dark text-light" style={styles.footerstyle}>
            <p className="text-center py-2" style={styles.title}> 
            This is footer
            </p>
           
        </footer>
    )
}

export default Footer
const styles={
    title:{
        fontSize:'16px',
        fontWeight:'600'
    },
    footerstyle:{
        position: 'relative',
        bottom:'0',
        width:'100%',
    }
}
