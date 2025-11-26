package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ProposalRequest;

@RestController
@RequestMapping("/db/proposals/")
public class ProposalsEndpoints extends BaseEndpoints<ProposalRequest>{

	public ProposalsEndpoints() {
		super("PROPOSALS", ProposalRequest.class);
	}

}
