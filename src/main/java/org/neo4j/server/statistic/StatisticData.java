/**
 * Copyright (c) 2002-2011 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server.statistic;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;

import java.math.BigDecimal;

import static java.math.BigDecimal.*;

/**
 * storage-class to collect general statistic-data.
 * 
 * @author tbaum
 * @since 19.05.11 18:07
 */
public class StatisticData {

    private final long count;
    private final double sum;
    private final double sumSq;
    private final double min;
    private final double max;

    public static StatisticData empty() {
        return new StatisticData(0, 0, 0, 0, 0);
    }

    private StatisticData(long count, double sum, double sumSq, double min, double max) {
        this.count = count;
        this.sum = sum;
        this.sumSq = sumSq;
        this.min = min;
        this.max = max;
    }

    @JsonIgnore private double getAvg() {
        double avg = 0;
        if (count > 1) {
            avg = sum / count;
        }
        return avg;
    }

    @JsonIgnore private double getVar() {
        double var = 0;
        if (count > 2) {
            var = Math.sqrt((sumSq - sum * sum / count) / (count - 1));
        }
        return var;
    }

    @Override public String toString() {
        return "StatisticData{" +
                "count=" + count +
                ", sum=" + getSumString() +
                ", min=" + getMinString() +
                ", max=" + getMaxString() +
                ", avg=" + getAvgString() +
                ", var=" + getVarString() +
                '}';
    }

    @JsonProperty("var") private Object getVarString() {
        return format(getVar());
    }

    private Object format(double value) {
        BigDecimal rounded = valueOf(value).setScale(2, ROUND_HALF_UP);

        return rounded.remainder(ONE).compareTo(ZERO) == 0
                ? rounded.setScale(0) : rounded.doubleValue();
    }

    @JsonProperty("avg") private Object getAvgString() {
        return format(getAvg());
    }

    @JsonProperty("max") private Object getMaxString() {
        return format(max);
    }

    @JsonProperty("min") private Object getMinString() {
        return format(min);
    }

    @JsonProperty("sum") private Object getSumString() {
        return format(sum);
    }

    public StatisticData addValue(double value) {
        return new StatisticData(
                count + 1,
                sum + value,
                sumSq + value * value,
                count > 0 && min < value ? min : value,
                count > 0 && max > value ? max : value
        );
    }
}


