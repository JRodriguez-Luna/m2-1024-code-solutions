import './TopicCard.css';

export function TopicCard() {
  return (
    <div>
      <div>
        <h2 className="box">Hypertext Markup Language</h2>
        <p className='details'>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
      </div>
      <div>
        <h2 className='box'>Cascading Style Sheets</h2>
        <p className='details hidden'>Showing CSS</p>
      </div>
      <div>
        <h2 className='box'>JavaScript</h2>
        <p className='details hidden'>Showing JS</p>
      </div>
    </div>
  )
}
