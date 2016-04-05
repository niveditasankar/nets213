public class QC {

	/*voteRank() (rank is a double)
	call voteRank(true) to increment, voteRank(false) to decrement
	getRank*/

	void adjustRanking(User u) {
		int totalReviews = u.getNumReviews();
		u.addHiddenReview();
		int hiddenReviews = u.getHiddenReviews();
		double ratio = (double) (hiddenReviews / totalReviews);
		u.setRank(ratio);
		return;
	}



	void hideReview(Review r, User u, Professor p) {
		if (r.getAggVotes() < -15) {
			r.hide();
			p.remove(r);
			adjustRanking(u);
			return;
		}
	}

}