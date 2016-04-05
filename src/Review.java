public class Review {

	private int userID;
	private String text;
	private double votes;
	private Boolean hide;

	public Review(int userID, String text) {
		this.userID = userID;
		this.text = text;
		ranking = 0.0;
		hide = false;
	}

	public getAuthorID() {
		return userID;
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
}