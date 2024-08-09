
function Project({title, imgUrl, techStack, link, completed}) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img 
                src={imgUrl} 
                alt="project thumbnail"
                className="w-full h-36 md:h-48 object-cover cursor-pointer" 
            />
            {completed ? 
            <div className="w-full p-4">
                <h1 className="text-lg md:text-xl md-2 md:mb-3 font-semibold">{title}</h1>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">{techStack.map(item =>(
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))
                    }
                </p>
                <div className="pt-4 text-md font-semibold">
                    {link && <a href={link} target="_blank" className="inline-block px-2 py-1 bg-slate-900 text-slate-200">Live Demo</a>    
                    }
                </div>
            </div>
            : <div className="pt-4 text-md font-semibold">
                <p className="inline-block px-2 py-1 bg-slate-900 text-slate-200">Coming soon...</p>
            </div>
            }
        </div>
    )
}

export default Project;