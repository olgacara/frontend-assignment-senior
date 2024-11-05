import React, { FC, useMemo, useState } from "react";
import "./index.scss";
import { fetchMockUsers } from "./services/userAPI";
import { User } from "@task1/types";


const Task1: FC = () => {
	const [filter, setFilter] = useState<string>("")
	const { data, isLoading, error } = fetchMockUsers()

	const filtered = useMemo(() => {
		return data
			? data.filter(user => filter.length > 0 ? user.login.includes(filter) : true)
			: [];
	}, [data, filter])

	return (
		<div className="dashboard">
			<div>
				{`Is loading: ${isLoading}`}
			</div>
			<div>
				{`Error: ${error || "No error"}`}
			</div>
			<input
				className="users__filter"
				disabled={isLoading || data?.length === 0}
				type="text"
				onChange={({ target: { value } }) => setFilter(value)} />

			{filtered.length > 0
				? <UserList
					users={filtered}
				/>
				: "No users..."}
		</div>
	);
};

const UserList = React.memo(({ users }: { users: User[] }) => (
	<ul>
		{users.map((user, index) => (
			<li key={`user-${index}`}>
				{user.login}
			</li>
		))}
	</ul>
));
export default Task1;
