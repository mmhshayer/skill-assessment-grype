import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMembers, reset } from '../features/members/membersSlice';
import Loading from '../components/Loading';

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { members, isLoading, isError, message } = useSelector(
    (state) => state.members
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getMembers())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Here is a list of all our members by joining date.</p>
      </section>

      <section className='content'>
        {members.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Created At</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
          <tbody>
              {members.map((member) => (
                <tr className='pb-2'>
                  <td>{new Date(member.createdAt).toDateString()}</td>
                  <th>{member.last_name} {member.last_name}</th>
                  <th>{member.email}</th>
                </tr>
              ))}
          </tbody>
        </table>
        ) : (
          <h3>No Members Found</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard