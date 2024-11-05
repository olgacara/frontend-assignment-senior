import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchMockUsers } from "./services/userAPI";
import { User } from "@task1/types";
import { render, screen } from "@testing-library/react";
import Task1 from ".";

vi.mock("./services/userAPI", () => ({
	fetchMockUsers: vi.fn(),
}));

describe("Task1 Component", () => {
	beforeEach(() => {
		vi.mocked(fetchMockUsers).mockReturnValue({
			data: mockedUsers,
			isLoading: false,
			error: null
		});
	});

	it("renders users and filters them by search term", async () => {
		render(<Task1 />);

		for (const mockerUser of mockedUsers) {
			expect(screen.getByText(mockerUser.login)).toBeInTheDocument();
		}
	});

	it("shows no users found message when filter returns no results", async () => {
		const { container } = render(<Task1 />);

		const filterInput = container.querySelector(".users__filter") as HTMLInputElement
		expect(filterInput).toBeInTheDocument();

		await userEvent.type(filterInput, "foobar");
		expect(filterInput).toHaveValue("foobar");

		expect(screen.getByText("No users...")).toBeInTheDocument();
	});

	it("shows correct user when filtering", async () => {
		const { container } = render(<Task1 />);

		const filterInput = container.querySelector(".users__filter") as HTMLInputElement
		expect(filterInput).toBeInTheDocument();

		await userEvent.type(filterInput, mockedUsers[0].login.slice(0, 2));
		expect(filterInput).toHaveValue(mockedUsers[0].login.slice(0, 2));

		// Verify "No users found" message is displayed
		expect(screen.getByText(mockedUsers[0].login)).toBeInTheDocument();
		expect(screen.queryByText(mockedUsers[1].login)).not.toBeInTheDocument();
	});
});



const mockedUsers = [{
	"login": "mojombo",
	"id": 1,
	"node_id": "MDQ6VXNlcjE=",
	"avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/mojombo",
	"html_url": "https://github.com/mojombo",
	"followers_url": "https://api.github.com/users/mojombo/followers",
	"following_url": "https://api.github.com/users/mojombo/following{/other_user}",
	"gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
	"organizations_url": "https://api.github.com/users/mojombo/orgs",
	"repos_url": "https://api.github.com/users/mojombo/repos",
	"events_url": "https://api.github.com/users/mojombo/events{/privacy}",
	"received_events_url": "https://api.github.com/users/mojombo/received_events",
	"type": "User",
	"user_view_type": "public",
	"site_admin": false
},
{
	"login": "defunkt",
	"id": 2,
	"node_id": "MDQ6VXNlcjI=",
	"avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/defunkt",
	"html_url": "https://github.com/defunkt",
	"followers_url": "https://api.github.com/users/defunkt/followers",
	"following_url": "https://api.github.com/users/defunkt/following{/other_user}",
	"gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
	"organizations_url": "https://api.github.com/users/defunkt/orgs",
	"repos_url": "https://api.github.com/users/defunkt/repos",
	"events_url": "https://api.github.com/users/defunkt/events{/privacy}",
	"received_events_url": "https://api.github.com/users/defunkt/received_events",
	"type": "User",
	"user_view_type": "public",
	"site_admin": false
}] as User[]
