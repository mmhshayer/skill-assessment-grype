import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMembers, reset } from '../features/members/membersSlice';
import Loading from '../components/Loading';

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
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
    console.log(members)

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  if (isLoading) {
    return <Loading />
  }

  let DisplayData;
  if(members.length > 2 ) {
    DisplayData = members.map(
      (member)=>{
        return(
          <tr>
            <td>{member.first_name}</td>
            <td>{member.last_name}</td>
            <td>{member.email}</td>
          </tr>
        )
      }
    )
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>

      <section className='content'>
        {members.length > 0 ? (
          <div className='goals'>
            {members.map((member) => (
              // <GoalItem key={goal._id} goal={goal} />
              <div className='pb-5'>
                <h3>{member.first_name}</h3>
                <p>{member.last_name}</p>
                <p>{member.email}</p>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Members Found</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard