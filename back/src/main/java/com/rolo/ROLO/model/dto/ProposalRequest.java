package com.rolo.ROLO.model.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

public class ProposalRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int product_id;
	@Getter @Setter public int buyer_id;
	@Getter @Setter public double cash_amount;
	@Getter @Setter public String status;
	@Getter @Setter public int parent_proposal_id;
	@Getter @Setter public Timestamp created_at;
	@Getter @Setter public Timestamp updated_at;
}
