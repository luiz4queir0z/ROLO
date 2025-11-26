package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ProposalItemRequest;

@RestController
@RequestMapping("/db/proposal-items/")
public class ProposalItemsEndpoints extends BaseEndpoints<ProposalItemRequest> {
	
	public ProposalItemsEndpoints() {
		super("PROPOSALITEMS", ProposalItemRequest.class);
	}
	
}
