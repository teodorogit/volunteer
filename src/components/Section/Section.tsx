import './Style.css'
export default function Section ({ title, children, ...props }) {
  
    return (
      <section id='content' {...props} style={{width:'95%',marginTop:'50px'}}>
        <h2 className='titulo_voluntario'>{title}</h2>
        {children}
      </section>
    );
  }
  