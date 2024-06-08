import React from 'react'

function Cards ({username}) {
  return (
    <>
        <figure class="bg-slate-100 rounded-xl dark:bg-slate-800">
				<img class="w-24 h-24" src="https://www.pexels.com/photo/woman-posing-in-white-clothes-17153119/" alt="" width="384" height="512"/>
				<div class="pt-6 space-y-4">
					<blockquote>
					<p class="text-lg">
						“Tailwind CSS is the only framework that I've seen scale
						on large teams. It’s easy to customize, adapts to any design,
						and the build size is tiny.”    
					</p>
					</blockquote>   
					<figcaption>
					<div>
                    {username}
					</div>
					<div>
						{/* {Occupation}, {location} */}ooooo
					</div>
					</figcaption>
				</div>
		</figure>
    </>
  )
}

export default Cards;


