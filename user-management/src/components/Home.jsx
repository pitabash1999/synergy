import { getContext } from "../store/Provider";
import User from "./User";

const Home = () => {
  const { state } = getContext();

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center  flex-col overflow-hidden">
      {state.loading || state.user.length === 0 ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="text-white text-xl w-full max-w-4xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">All Users</h2>
          <div className="flex flex-col-reverse gap-4 overflow-y-auto max-h-[80vh] pb-4">
            {state.user.map((user, ind) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
