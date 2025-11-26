package com.rolo.ROLO.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.rolo.ROLO.service.DatabaseService;

public abstract class BaseEndpoints<T> {

	protected String tableName;
	protected Class<T> type;

	public BaseEndpoints(String tableName, Class<T> type) {
		this.tableName = tableName;
		this.type = type;
	}

	@Autowired
	protected DatabaseService service;

	@GetMapping
	public ResponseEntity<List<T>> getAll() {
		try {
			List<T> queryResult = ResultMapper.mapToList(service.getAll(tableName), type);
			return ResponseEntity.status(HttpStatus.OK).body(queryResult);
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping("{id}")
	public ResponseEntity<T> getById(@PathVariable int id) {
		try {
			List<T> queryResult = ResultMapper.mapToList(service.getByField(tableName, "id", id), type);
			
			if(queryResult.size() == 0)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			
			return ResponseEntity.status(HttpStatus.OK).body(queryResult.get(0));
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody T request) {
		try {
			service.create(tableName, request);
			return ResponseEntity.status(HttpStatus.CREATED).build();			
		} catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

	@DeleteMapping("{id}")
	public ResponseEntity<?> delete(@PathVariable int id) {
		try {
			service.deleteByField(tableName, "id", id);
			return ResponseEntity.status(HttpStatus.OK).build();			
		} catch(SQLException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
}
