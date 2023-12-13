const UserProfile = ({ params }) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className="text-4xl">User Profile {params.id}</h1>
        </div>
    )
}

export default UserProfile