public class Review {

	private User user;
	private int userID;
	private int id;
	private String text;
	private double votes;
	private Boolean hide;

	private double difficulty;
	private double helpfulness;
	private double engagement;
	private double overall;

	public Review(User u, int id, String text, double d, double h, double e, double o) {
		this.user = u;
		this.userID = u.getID();
		this.id = id;
		this.text = text;
		this.votes = 0.0;
		ranking = 0.0;
		hide = false;

		this.difficulty = d;
		this.helpfulness = h;
		this.engagement = e;
		this.overall = o;
	}

	//Getters / Setters
	public int hashCode() {
		return this.id;
	}

	public boolean equals(Review r) {
		return ((this.id == r.getID()) && this.userID = r.getUserID())
	}

	public double getDifficulty() {
		return this.difficulty;
	}

	public double getHelpfulness() {
		return this.helpfulness;
	}

	public double getEngagement() {
		return this.engagement;
	}

	public double getOverall() {
		return this.overall;
	}

	public getUser() {
		return user;
	}

	public getUserID() {
		return userID;
	}

	//returns Review ID
	public getID() {
		return this.id;
	}

	public String getText() {
		return text;
	}

	public double getAggVotes() {
		return votes;
	}

	public void voteRank(Boolean positive) {
		if (positive) {
			votes += 1.0;
		}
		else {
			votes -= 1.0;
		}
	}

	public void hide() {
		this.hide = true;
	}

	public String toString() {
		return text;
	}
}