package com.ssafy.royale.domain.league.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service("leagueService")
@RequiredArgsConstructor
@Transactional
public class LeagueServiceImpl implements LeagueService {

}
