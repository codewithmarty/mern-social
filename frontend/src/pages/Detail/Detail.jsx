import React, { useEffect, useState } from 'react'
import Project from '../../components/Project/Project'
import { Link } from 'react-router-dom'
import { friendRequest, uploadImage } from '../../utilities/users-api'

const Detail = ({ details, user, setDetails, setUser }) => {

    const [overlayClass, setOverlayClass] = useState("overlay hide-overlay")
    const [loaderClass, setLoaderClass] = useState("loader loader-hide")
    const [status, setStatus] = useState(null)
    const [photo, setPhoto] = useState(null)

    const toggleOverlay = () => {
        setOverlayClass(overlayClass == "overlay hide-overlay" ? "overlay fade-in-image" : "overlay hide-overlay")
        setLoaderClass("loader loader-hide")
    }

    const handleChange = (evt) => {
        setPhoto(evt.target.files[0])
    }

    const handleImageUpload = (evt) => {
        evt.preventDefault()
        const data = new FormData()
        data.append('file', photo)
        setLoaderClass("loader")
        uploadImage(data).then(res => {
            setUser(res.data) 
            setDetails(res.data)
            toggleOverlay()
        })
    }

    const handleFriendRequest = () => {
        friendRequest({ firstUser: user._id, secondUser: details._id }).then(res => {
            setStatus(res)
        })
    }

    useEffect(() => {
        if (user._id === details._id) return
        async function fetchFriendship() {
            friendRequest({ firstUser: user._id, secondUser: details._id }).then(res => {
                setStatus(res)
            })
        }
        fetchFriendship()
    }, [])

  return (
        <div className="container my-5 fade-in-image">
            <div className="row">
                <div className="col-md-5">
                    <div className="main-img">
                        <img className="img-fluid w-100 card-image rounded" src={details.pic} alt="ProductS" />
                        {details._id == user._id ? 
                            <div className="btn btn-primary rounded-circle m-2" onClick={toggleOverlay}>+</div>
                        :
                            <>
                                {
                                status ?
                                    <>
                                    {status.firstUser == user._id && !status.confirmed ?
                                        <div className="btn btn-primary m-2">Pending</div>
                                    :
                                    <>
                                        {
                                            status.confirmed ? 
                                                <>You and {details.firstName} {details.lastName} are friends!</>                                            
                                            :
                                            <div className="btn btn-success m-2" onClick={handleFriendRequest}>Accept Friend</div>
                                        
                                        }
                                        </>
                                    }                                    
                                    </>
                                :
                                    <div className="btn btn-primary m-2" onClick={handleFriendRequest}>Add Friend</div>
                                }
                            </>
                        }   
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="main-description px-2">
                        <h2>{details.firstName} {details.lastName}</h2>
                        {details._id == user._id ? 
                        <>
                            <Link className="btn btn-primary edit" to="/profile/edit">Edit Profile</Link>
                            <Link className="btn btn-primary edit" to="/profile/addProject">Add Projects</Link>
                        </>
                        :
                            <></>
                        }
                        <div className="category text-bold text-success">
                            {details.role}
                        </div>
                        <div className="bio text-bold my-3">
                            {details.bio}
                        </div>
                        <a href={details.instagram} target="_blank"><div className="fa fa-instagram"></div></a>
                        <a href={details.github} target="_blank"><div className="fa fa-github"></div></a>
                        <a href={"mailto:"+details.email}><div className="fa fa-envelope"></div></a>
                        <a href={details.portfolio} target="_blank"><div className="fa fa-external-link"></div></a>

                        <div className="price-area my-4">
                            <p className="text-secondary mb-1">Check out some of my projects!</p>
                        </div>

                    </div>
                
                </div>
            </div>

        <div className="container similar-products my-4">
            <hr />
            <p className="display-5">Projects</p>
            <div className="row">
                {details.projects.map(project => {
                    return <Project project={project}/>
                })}
            </div>
        </div>
        {details._id == user._id ? 
            <div className={overlayClass}>
                <form onSubmit={handleImageUpload}>
                    <div>
                        <input type="file" name="image" id="image" accept="image/*" onChange={handleChange} />
                        <button type="submit">Upload</button>
                        <div className="btn btn-danger rounded-circle m-2" onClick={toggleOverlay}>x</div>
                    </div>
                    <div className={loaderClass}></div>
                </form>
            </div>
        :
            <></>
        }
    </div>
  )
}

export default Detail