package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class ProposalItemRequest {
	@Getter @Setter public int id;
	@Getter @Setter public int proposal_id;
	@Getter @Setter public int product_id;
}
