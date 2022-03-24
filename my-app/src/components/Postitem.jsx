import React from 'react'

const Postitem = (props) => {
    
  return (
    <div className='post'>
          <strong>{props.post.id} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
          <div className='post__btns'>
              <button>Удалить</button>
          </div>
      </div>
  )
}

export default Postitem