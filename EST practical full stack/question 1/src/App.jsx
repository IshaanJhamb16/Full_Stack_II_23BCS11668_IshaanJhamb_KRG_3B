import ActivityCard from "./component/Activity";

const App = () => {
  const activities = [
    { id: 1, title: 'Morning Yoga', date: '2026-04-26', category: 'Wellness' },
    { id: 2, title: 'Team Sync', date: '2026-04-26', category: 'Work' },
    { id: 3, title: 'Grocery Shopping', date: '2026-04-27', category: 'Errands' },
    { id: 4, title: 'Coding Workshop', date: '2026-04-28', category: 'Education' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Activities</h1>
      {activities.map((activity) => (
        <ActivityCard 
          key={activity.id}
          title={activity.title}
          date={activity.date}
          category={activity.category}
        />
      ))}
    </div>
  );
};

export default App;

