public class Review {

	private int userID;
	private int id;
	private String text;
	private double votes;
	private Boolean hide;

	public Review(int userID, int id, String text) {
		this.userID = userID;
		this.id = id;
		this.text = text;
		ranking = 0.0;
		hide = false;
	}

	//Getters / Setters
	public int hashCode() {
		return this.id;
	}

	public boolean equals(Review r) {
		return ((this.id == r.getID()) && this.userID = r.getUserID())
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