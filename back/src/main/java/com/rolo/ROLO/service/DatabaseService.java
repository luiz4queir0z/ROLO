package com.rolo.ROLO.service;

import java.lang.reflect.Field;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseService {

	@Autowired
	private DBQueryService queryService;

	public List<Map<String,Object>> getAll(String tableName) throws SQLException {
		return queryService.rawQuery("SELECT * FROM " + tableName);
	}

	public List<Map<String,Object>> getByField(String tableName, String fieldName, Object value) throws SQLException {
		return queryService.rawQuery(String.format(
				"SELECT * FROM %s WHERE %s = " + value, 
				tableName, fieldName));
	}

	public int create(String tableName, Object object) throws Exception {
	    Field[] fields = object.getClass().getDeclaredFields();
	    Object[] values = new Object[fields.length];

	    StringBuilder sql = new StringBuilder("INSERT INTO ")
	            .append(tableName)
	            .append(" (");

	    for (int i = 0; i < fields.length; i++) {
	        fields[i].setAccessible(true);
	        sql.append(fields[i].getName()).append(", ");
	        values[i] = fields[i].get(object);
	    }

	    sql.setLength(sql.length() - 2);
	    sql.append(") VALUES (");

	    for (Object v : values) {
	        sql.append(sqlLiteral(v)).append(", ");
	    }

	    sql.setLength(sql.length() - 2);
	    sql.append(")");

	    return queryService.rawUpdate(sql.toString());
	}
	
	private String sqlLiteral(Object value) {
	    if (value == null) return "NULL";

	    if (value instanceof String) {
	        String s = ((String) value).replace("'", "''");
	        return "'" + s + "'";
	    }

	    if (value instanceof java.sql.Timestamp) {
	        return "TIMESTAMP '" + new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS")
	                .format((java.util.Date) value) + "'";
	    }

	    if (value instanceof java.sql.Date) {
	        return "DATE '" + new java.text.SimpleDateFormat("yyyy-MM-dd")
	                .format((java.util.Date) value) + "'";
	    }

	    if (value instanceof java.math.BigDecimal) {
	        return ((java.math.BigDecimal) value).toPlainString();
	    }

	    if (value instanceof Number) {
	        return String.valueOf(value);
	    }

	    if (value instanceof Boolean) {
	        return ((Boolean) value) ? "TRUE" : "FALSE";
	    }

	    String s = value.toString().replace("'", "''");
	    return "'" + s + "'";
	}


	public int deleteByField(String tableName, String fieldName, Object value) throws SQLException {
		return queryService.rawUpdate("DELETE FROM " + tableName + " WHERE " + fieldName + " = " + value);
	}
}
